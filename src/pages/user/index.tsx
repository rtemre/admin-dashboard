import { MoreHorizontal, Plus } from "lucide-react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTablePagination } from "@/components/ui/data-table-pagination";
import { SearchInput } from "@/components/ui/search-input";
import { TableSkeleton } from "@/components/ui/table-skeleton";
import { usersData } from "@/constant/mockdata";
import { useGetUsersQuery } from "@/store/usersApi";
import { ErrorState } from "@/components/shared/error-state";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { PageHeader } from '@/components/shared/page-header';

export function UsersPage() {
  const { data, isLoading, isError, error, refetch } = useGetUsersQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter users based on search query
  const filteredUsers =
    data?.data?.filter(
      (user) =>
        user.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.lastname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  const totalItems = filteredUsers.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (pageSize: number) => {
    setItemsPerPage(pageSize);
    setCurrentPage(1); // Reset to first page when changing page size
  };

  // Reset to first page when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const getErrorMessage = (err: unknown) => {
    const e = err as FetchBaseQueryError & { status?: number; data?: any };
    if (!e) return "Failed to load data.";
    if (typeof e.status === "number") {
      const detail = (e as any).data?.message || (e as any).error;
      return `Request failed (${e.status})${detail ? `: ${detail}` : ""}`;
    }
    return (e as any)?.error || "Failed to load data.";
  };

  if (isError) {
    return (
      <div className="space-y-6">
        <PageHeader
          title="Users"
          subtitle="Manage your application users"
        />
        <ErrorState
          title="Failed to load users"
          message={getErrorMessage(error)}
          onRetry={refetch}
        />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        {/* Page Header */}
        <PageHeader
          title="Users"
          subtitle="Manage your application users"
          actions={
            <Button className="bg-primary hover:bg-primary/90" disabled>
              <Plus className="w-4 h-4 mr-2" />
              Add User
            </Button>
          }
        />

        {/* Loading Skeleton */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>All Users</CardTitle>
                <CardDescription>
                  A list of all users in your application including their name,
                  email, and other details.
                </CardDescription>
              </div>
              <SearchInput
                placeholder="Search users..."
                value=""
                onChange={() => {}}
                className="w-64"
                disabled
              />
            </div>
          </CardHeader>
          <CardContent>
            <TableSkeleton rows={8} columns={5} />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <PageHeader
        title="Users"
        subtitle="Manage your application users"
        actions={
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Add User
          </Button>
        }
      />

      {/* Users Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Users</CardTitle>
              <CardDescription>
                A list of all users in your application including their name,
                email, and other details.
              </CardDescription>
            </div>
            <SearchInput
              placeholder="Search users..."
              value={searchQuery}
              onChange={setSearchQuery}
              className="w-64"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.No.</TableHead>

                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Website</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentUsers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    {searchQuery ? (
                      <div className="text-muted-foreground">
                        No users found matching "{searchQuery}"
                      </div>
                    ) : (
                      <div className="text-muted-foreground">
                        No users found
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ) : (
                currentUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell className="font-medium">
                      {user.firstname} {user.lastname}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {user.username ? user.username : "N/A"}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span>{user.website}</span>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          <DropdownMenuItem>Edit user</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Delete user
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
          <DataTablePagination
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSizeChange}
            className="mt-4"
          />
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.total}</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {usersData.filter((user) => user.status === "active").length}
            </div>
            <p className="text-xs text-muted-foreground">+1 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {usersData.filter((user) => user.status === "pending").length}
            </div>
            <p className="text-xs text-muted-foreground">Awaiting approval</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
export default UsersPage;
