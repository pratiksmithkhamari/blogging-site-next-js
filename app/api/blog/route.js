import { DbConnection } from "@/db/dbconnection";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { BlogModel } from "@/models/blog.model";
import { NextURL } from "next/dist/server/web/next-url";
import fs from "fs";
export async function GET(req) {
  try {
    await DbConnection();
    const blogId = req.nextUrl.searchParams.get("id");
    if (blogId) {
      const blog = await BlogModel.findById(blogId);
      return NextResponse.json(blog);
    } else {
      const blogs = await BlogModel.find({});

      return NextResponse.json({ blogs });
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);

    return NextResponse.json(
      { message: "Failed to fetch blogs", error: error.message },
      { status: 500 }
    );
  }
}
export async function POST(request) {
  try {
    await DbConnection();

    const formData = await request.formData();
    const image = formData.get("image");

    if (!image || !image.name || !image.type.startsWith("image/")) {
      console.error("Invalid image file");
      return NextResponse.json(
        { success: false, message: "Invalid image file" },
        { status: 400 }
      );
    }

    const imageByteData = await image.arrayBuffer();
    const imageBuffer = Buffer.from(imageByteData);
    const timestamp = new Date().getTime();
    const filePath = path.join(
      process.cwd(),
      "public",
      `${timestamp}_${image.name}`
    );

    await writeFile(filePath, imageBuffer);
    console.log(`Image written successfully to: ${filePath}`);

    const imageUrl = `/${timestamp}_${image.name}`;

    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      image: imageUrl,
      author: formData.get("author"),
      authorImg: formData.get("authorImg"),
      category: formData.get("category"),
      date: new Date(),
    };

    await BlogModel.create(blogData);
    console.log("Blog data added successfully:", blogData);

    return NextResponse.json(
      { success: true, blogData, msg: "Blog data added" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST /api/blog:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create blog",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// api for deleting a blog

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  const blog = await BlogModel.findById(id);
  if (!blog) {
    return NextResponse.json(
      { success: false, message: "Blog not found" },
      { status: 404 }
    );
  }
  fs.unlink(`./public${blog.image}`, () => {});
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({
    success: true,
    message: "Blog deleted successfully",
  });
}
