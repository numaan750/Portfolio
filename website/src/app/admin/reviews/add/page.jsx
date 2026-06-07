"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ReviewForm from "@/components/admin/ReviewForm";

export default function AddReviewPage() {
  const router = useRouter();

  const handleAdd = async () => {
    // After a successful addition, go back to the admin reviews list
    router.push("/admin/reviews");
  };

  return <ReviewForm onAdd={handleAdd} />;
}
