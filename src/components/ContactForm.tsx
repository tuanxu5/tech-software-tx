"use client";

import { useState } from "react";
import { Phone, Mail, Send, CheckCircle, MapPin } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
    let isValid = true;

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Vui lòng nhập họ tên";
      isValid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
      isValid = false;
    }

    // Validate phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Số điện thoại không hợp lệ";
      isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Vui lòng nhập mô tả dự án";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });
      setErrors({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  return (
    <section style={{ padding: "0 32px 120px", background: "#000" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        {/* Form */}
        <div
          className="contact-form-container"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "20px",
            padding: "56px",
            marginBottom: "48px",
          }}
        >
          {isSuccess ? (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "rgba(215,172,56,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <svg width="0" height="0">
                  <defs>
                    <linearGradient id="check-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#d7ac38" />
                      <stop offset="100%" stopColor="#ed3334" />
                    </linearGradient>
                  </defs>
                </svg>
                <CheckCircle size={32} stroke="url(#check-grad)" strokeWidth={2} />
              </div>
              <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>
                Đã gửi thành công
              </h3>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)" }}>
                Chúng tôi sẽ liên hệ lại trong 24 giờ
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "40px" }}>
                <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
                  Gửi thông tin dự án
                </h2>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)" }}>
                  Điền form bên dưới, chúng tôi sẽ liên hệ tư vấn miễn phí
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: "block",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#fff",
                      marginBottom: "10px",
                    }}
                  >
                    Họ tên <span style={{ color: "#ed3334" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Nhập họ tên..."
                    style={{
                      padding: "16px 20px",
                      fontSize: "16px",
                      borderColor: errors.name ? "#ed3334" : undefined,
                    }}
                  />
                  {errors.name && (
                    <div style={{ color: "#ed3334", fontSize: "14px", marginTop: "6px" }}>
                      {errors.name}
                    </div>
                  )}
                </div>

                {/* Email & Phone */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        display: "block",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#fff",
                        marginBottom: "10px",
                      }}
                    >
                      Email <span style={{ color: "#ed3334" }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Nhập email..."
                      style={{
                        padding: "16px 20px",
                        fontSize: "16px",
                        borderColor: errors.email ? "#ed3334" : undefined,
                      }}
                    />
                    {errors.email && (
                      <div style={{ color: "#ed3334", fontSize: "14px", marginTop: "6px" }}>
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      style={{
                        display: "block",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#fff",
                        marginBottom: "10px",
                      }}
                    >
                      Số điện thoại <span style={{ color: "#ed3334" }}>*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Nhập số điện thoại..."
                      style={{
                        padding: "16px 20px",
                        fontSize: "16px",
                        borderColor: errors.phone ? "#ed3334" : undefined,
                      }}
                    />
                    {errors.phone && (
                      <div style={{ color: "#ed3334", fontSize: "14px", marginTop: "6px" }}>
                        {errors.phone}
                      </div>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#fff",
                      marginBottom: "10px",
                    }}
                  >
                    Mô tả dự án <span style={{ color: "#ed3334" }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="form-input"
                    placeholder="Nhập mô tả dự án..."
                    style={{ 
                      resize: "vertical",
                      padding: "16px 20px",
                      fontSize: "16px",
                      minHeight: "100px",
                      borderColor: errors.message ? "#ed3334" : undefined,
                    }}
                  />
                  {errors.message && (
                    <div style={{ color: "#ed3334", fontSize: "14px", marginTop: "6px" }}>
                      {errors.message}
                    </div>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    padding: "18px 36px",
                    fontSize: "17px",
                    justifyContent: "center",
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner" />
                      Đang gửi...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Gửi thông tin
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Contact Info - Below form */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          <a
            href="tel:0386426150"
            style={{
              padding: "32px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.borderColor = "rgba(215,172,56,0.3)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, rgba(215, 172, 56, 0.15) 0%, rgba(237, 51, 52, 0.15) 100%)",
                border: "1px solid rgba(215,172,56,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="phone-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d7ac38" />
                    <stop offset="100%" stopColor="#ed3334" />
                  </linearGradient>
                </defs>
              </svg>
              <Phone size={26} stroke="url(#phone-grad)" strokeWidth={2} />
            </div>
            <div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "6px", fontWeight: 600 }}>
                Điện thoại
              </div>
              <div style={{ fontSize: "18px", fontWeight: 600, color: "#fff" }}>
                0386 426 150
              </div>
            </div>
          </a>

          <a
            href="mailto:lehoangtuan012@gmail.com"
            style={{
              padding: "32px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.borderColor = "rgba(215,172,56,0.3)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, rgba(215, 172, 56, 0.15) 0%, rgba(237, 51, 52, 0.15) 100%)",
                border: "1px solid rgba(215,172,56,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="mail-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d7ac38" />
                    <stop offset="100%" stopColor="#ed3334" />
                  </linearGradient>
                </defs>
              </svg>
              <Mail size={26} stroke="url(#mail-grad)" strokeWidth={2} />
            </div>
            <div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "6px", fontWeight: 600 }}>
                Email
              </div>
              <div style={{ fontSize: "18px", fontWeight: 600, color: "#fff" }}>
                lehoangtuan012@gmail.com
              </div>
            </div>
          </a>

          <div
            style={{
              padding: "32px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, rgba(215, 172, 56, 0.15) 0%, rgba(237, 51, 52, 0.15) 100%)",
                border: "1px solid rgba(215,172,56,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="map-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d7ac38" />
                    <stop offset="100%" stopColor="#ed3334" />
                  </linearGradient>
                </defs>
              </svg>
              <MapPin size={26} stroke="url(#map-grad)" strokeWidth={2} />
            </div>
            <div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "6px", fontWeight: 600 }}>
                Địa chỉ
              </div>
              <div style={{ fontSize: "18px", fontWeight: 600, color: "#fff" }}>
                Mỹ Đình - Hà Nội
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          /* Email & Phone grid to single column */
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          
          /* Form padding */
          .contact-form-container {
            padding: 24px 20px !important;
          }
          
          /* Form title */
          h2[style*="fontSize: 28px"] {
            font-size: 24px !important;
          }
          
          /* Contact info cards padding */
          div[style*="padding: 32px"] {
            padding: 24px !important;
          }
          
          /* Contact info grid */
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(300px, 1fr))"] {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 480px) {
          /* Form padding smaller */
          .contact-form-container {
            padding: 20px 16px !important;
          }
          
          /* Form title smaller */
          h2[style*="fontSize: 28px"] {
            font-size: 22px !important;
          }
          
          /* Input padding */
          input[style*="padding: 16px 20px"],
          textarea[style*="padding: 16px 20px"] {
            padding: 14px 16px !important;
            font-size: 15px !important;
          }
          
          /* Button padding */
          button[style*="padding: 18px 36px"] {
            padding: 16px 28px !important;
            font-size: 16px !important;
          }
          
          /* Contact info cards smaller */
          div[style*="padding: 32px"] {
            padding: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
