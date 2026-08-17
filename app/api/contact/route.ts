import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const website = String(body.website || "").trim();

    if (website) {
      return NextResponse.json({
        success: true,
      });
    }

    const name = String(body.name || "")
      .trim()
      .slice(0, 100);
    const phone = String(body.phone || "")
      .trim()
      .slice(0, 30);
    const email = String(body.email || "")
      .trim()
      .slice(0, 254);
    const service = String(body.service || "")
      .trim()
      .slice(0, 100);
    const message = String(body.message || "")
      .trim()
      .slice(0, 3000);

    if (!name || !phone) {
      return NextResponse.json(
        {
          error: "Name and phone number are required.",
        },
        {
          status: 400,
        },
      );
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email || "Not provided");
    const safeService = escapeHtml(service || "Not specified");
    const safeMessage = escapeHtml(message || "No additional message");

    const { data, error } = await resend.emails.send({
      from: "Rick's Tree Service <contact@ricks-tree-service.com>",

      to: [process.env.CONTACT_EMAIL || "rickstreeservice26@gmail.com"],

      replyTo: email || undefined,

      subject: `New Quote Request - ${name}`,

      html: `
        <div
          style="
            margin: 0;
            padding: 30px;
            background: #f3f3f0;
            font-family: Arial, Helvetica, sans-serif;
            color: #1d211c;
          "
        >
          <div
            style="
              max-width: 620px;
              margin: 0 auto;
              background: #ffffff;
              border-top: 5px solid #2f6b32;
            "
          >
            <div style="padding: 32px;">
              
              <p
                style="
                  margin: 0 0 6px;
                  color: #2f6b32;
                  font-size: 12px;
                  font-weight: bold;
                  text-transform: uppercase;
                  letter-spacing: 1px;
                "
              >
                Rick's Tree Service
              </p>

              <h1
                style="
                  margin: 0;
                  font-size: 26px;
                  line-height: 1.2;
                  color: #182317;
                "
              >
                New Quote Request
              </h1>

              <p
                style="
                  margin: 10px 0 28px;
                  color: #666b63;
                  font-size: 14px;
                  line-height: 1.6;
                "
              >
                A customer submitted a new request through
                ricks-tree-service.com.
              </p>

              <table
                cellpadding="0"
                cellspacing="0"
                style="
                  width: 100%;
                  border-collapse: collapse;
                  font-size: 14px;
                "
              >
                <tr>
                  <td
                    style="
                      padding: 12px 0;
                      width: 125px;
                      border-bottom: 1px solid #e4e5e0;
                      color: #777b74;
                      font-weight: bold;
                    "
                  >
                    Name
                  </td>

                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #e4e5e0;
                    "
                  >
                    ${safeName}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #e4e5e0;
                      color: #777b74;
                      font-weight: bold;
                    "
                  >
                    Phone
                  </td>

                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #e4e5e0;
                    "
                  >
                    <a
                      href="tel:${safePhone}"
                      style="color: #2f6b32; font-weight: bold;"
                    >
                      ${safePhone}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #e4e5e0;
                      color: #777b74;
                      font-weight: bold;
                    "
                  >
                    Email
                  </td>

                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #e4e5e0;
                    "
                  >
                    ${safeEmail}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #e4e5e0;
                      color: #777b74;
                      font-weight: bold;
                    "
                  >
                    Service
                  </td>

                  <td
                    style="
                      padding: 12px 0;
                      border-bottom: 1px solid #e4e5e0;
                    "
                  >
                    ${safeService}
                  </td>
                </tr>
              </table>

              <div style="margin-top: 26px;">
                <p
                  style="
                    margin: 0 0 8px;
                    color: #777b74;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                  "
                >
                  Customer Message
                </p>

                <div
                  style="
                    padding: 18px;
                    background: #f3f3f0;
                    border-left: 4px solid #2f6b32;
                    font-size: 14px;
                    line-height: 1.65;
                    white-space: pre-wrap;
                  "
                >${safeMessage}</div>
              </div>

              <div style="margin-top: 30px;">
                <a
                  href="tel:${safePhone}"
                  style="
                    display: inline-block;
                    padding: 13px 22px;
                    background: #2f6b32;
                    color: #ffffff;
                    text-decoration: none;
                    font-size: 13px;
                    font-weight: bold;
                    text-transform: uppercase;
                  "
                >
                  Call Customer
                </a>
              </div>

            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "Unable to send your request.",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong.",
      },
      {
        status: 500,
      },
    );
  }
}
