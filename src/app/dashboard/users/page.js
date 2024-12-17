import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "cash",
  },

]

export default function userTable() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-50 ">
    <h1 className="text-center text-3xl font-serif mb-6">Total Users</h1>
    <Table className="w-[92%] bg-gray-50 mx-auto border-2">
      <TableCaption>Users information</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>S.no</TableHead>
          <TableHead>UserName</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
  )
}
