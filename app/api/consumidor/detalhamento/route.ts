// app/api/consumidor/detalhamento/route.js
import { NextRequest, NextResponse } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client } from '@aws-sdk/client-s3'


export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const permissionaria = searchParams.get("permissionaria");
    const uc = searchParams.get("uc");

    // Validate Request
    if (!permissionaria) {
        return NextResponse.json(
            { error: "Missing 'permissionaria' query parameter" },
            { status: 400 }
        );
    }

    if (!uc) {
        return NextResponse.json(
            { error: "Missing 'uc' query parameter" },
            { status: 400 }
        );
    }

    // Prepare AWS S3 Client
    const s3 = new S3Client({
        region: "us-east-1", // e.g., "us-east-1"
        credentials: {
            accessKeyId: process.env.ACCESS_KEY_ID_S3 as string,
            secretAccessKey: process.env.ACCESS_KEY_SECRET_S3 as string,
        }
    });

    // Create AWS S3 Command
    const command = new GetObjectCommand({
        Bucket: "sipam",
        Key: `${permissionaria}/${uc}.pdf`,
    });

    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 }); // 1-hour expiry

    // Response
    return NextResponse.json({
        pdfUrl: `${signedUrl}`,
    });
}
