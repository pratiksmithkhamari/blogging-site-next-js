import { DbConnection } from "@/db/dbconnection";
import { Comment } from "@/models/comments.model";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const blogId = searchParams.get("blogId");

    // console.log("Searching for comments with blogId:", blogId);

    await DbConnection();

    const results = await Comment.find({ blogId }).sort({ createdAt: -1 });

    return NextResponse.json({results});
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { blogId, comment } = await request.json();

    if (!blogId || !comment) {
      return NextResponse.json(
        { error: "blogId and comment are required" },
        { status: 400 }
      );
    }

    await DbConnection();

    const newComment = new Comment({
      blogId,
      comment,
    });

    const savedComment = await newComment.save();

    return NextResponse.json({
      savedComment,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add comment" },
      { status: 500 }
    );
  }
}


export async function DELETE(params) {
   try {
    
   } catch (error) {
    
   }
}