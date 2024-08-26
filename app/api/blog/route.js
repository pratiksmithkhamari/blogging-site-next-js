import { DbConnection } from "@/db/dbconnection";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { BlogModel } from "@/models/blog.model";

export async function GET(req) {
  const blogs = await BlogModel.find({});
  await DbConnection();
  return NextResponse.json({ blogs });
}

// post api for creating a blog
export async function POST(request) {
  await DbConnection();
  const formData = await request.formData();

  const image = formData.get("image");

  // Validate the image file (optional but recommended)
  if (!image || !image.name || !image.type.startsWith("image/")) {
    return NextResponse.json(
      { success: false, message: "Invalid image file" },
      { status: 400 }
    );
  }

  // Get image buffer data
  const imageByteData = await image.arrayBuffer();
  const imageBuffer = Buffer.from(imageByteData);

  // Resolve the correct path for saving the file
  const filePath = path.join(
    process.cwd(),
    "public",
    `${new Date().getTime()}_${image.name}`
  );

  // Write the file
  await writeFile(filePath, imageBuffer);

  const imageUrl = `/${new Date().getTime()}_${image.name}`;
  console.log(imageUrl);

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
  console.log("added successful blogdata");

  return NextResponse.json(
    { success: true, blogData, msg: "blog data added" },
    { status: 200 }
  );
}
