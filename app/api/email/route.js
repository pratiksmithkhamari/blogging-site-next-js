import { DbConnection } from "@/db/dbconnection";
import { EmailModel } from "@/models/email.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  await DbConnection();
  const formData = await req.formData();
  const emailData = {
    email: `${formData.get("email")}`,
  };
  await EmailModel.create(emailData);
  return NextResponse.json({
    status: 201,
    success: true,
    message: "Email added successfully",
  });
}

export async function GET(req) {
  await DbConnection();
  const email = await EmailModel.find({});
  return NextResponse.json({
    status: 200,
    success: true,
    emailData: email,
    message: "successfully get all emails",
  });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");

  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({
    success: true,
    message: "Blog deleted successfully",
  });
}
