import React from 'react'
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'

const chartData = [
    { month: "Jan", value: 400 },
    { month: "Feb", value: 600 },
    { month: "Mar", value: 800 },
    { month: "Apr", value: 700 },
    { month: "May", value: 900 },
    { month: "Jun", value: 1000 }
]

const tableData = [
    { id: 1, name: "Alice", email: "alice@example.com", status: "Active" },
    { id: 2, name: "Bob", email: "bob@example.com", status: "Pending" },
    { id: 3, name: "Charlie", email: "charlie@example.com", status: "Inactive" }
]

const Home = () => {
    return (
        <div className="space-y-3 h-full overflow-y-auto px-3">

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                { title: "Revenue", value: "$25,000" },
                { title: "Customers", value: "1,245" },
                { title: "Accounts", value: "323" },
                { title: "Growth Rate", value: "12%" }
                ].map((item, idx) => (
                <Card key={idx}>
                    <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="text-2xl font-bold">{item.value}</p>
                    </CardContent>
                </Card>
                ))}
            </div>

            {/* Chart */}
            <Card>
                <CardHeader>
                    <CardTitle>Monthly Performance</CardTitle>
                </CardHeader>
                <CardContent className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="value" stroke="#4f46e5" fill="#c7d2fe" />
                        </AreaChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            {/* Table */}
            <Card>
                <CardHeader>
                    <CardTitle>User Table</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tableData.map((user) => (
                                <TableRow key={user.id}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}

export default Home
