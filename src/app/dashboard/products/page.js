"use client"
import React, { useState } from 'react'

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
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

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
    paymentMethod: "Credit Card",
  },
]

export default function TableDemo() {
  const [userName, setName] = useState("");
  const [price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [Open, setOpen] = useState(false)
  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center bg-gray-50 ">
        
          <h1 className="text-center text-3xl font-serif mb-6">Products</h1>
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
              {invoices.map((invoice, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">{invoice.invoice}</TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <div className='flex gap-6  justify-end pr-2  items-center'>
                      <Button variant="outline" className="h-[35px] hover:bg-green-300" onClick={()=>setOpen(true)}>Edit</Button>
                    <Button variant="outline" className="h-[35px] hover:bg-red-500">Delete</Button>
                  </div>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Sheet open={Open} onOpenChange={setOpen}>
          <SheetContent className='pr-[6%]'>
            <SheetHeader>
              <SheetTitle>Edit product</SheetTitle>
              <SheetDescription>
                Make changes to your produts here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value={userName} placeholder='Product name'  onChange={(e) => setName(e.target.value)} className=" col-span-3 w-[130%]" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  price
                </Label>
                <Input id="username" value={price} placeholder='$' onChange={(e) => setPrice(e.target.value)} className=" col-span-3 w-[130%]" />
              </div>
              <div className="grid grid-cols-3 flex-col gap-4">
                <Label htmlFor="Description" className="text-right">
                Description
                </Label>
                <Textarea value={Description} placeholder='Description' onChange={(e) => setDescription(e.target.value)} className=" w-[110%] h-[100px]" /> 
              </div>
            </div>
            <SheetFooter>
                <Button >Save changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

    </>
  )
}
