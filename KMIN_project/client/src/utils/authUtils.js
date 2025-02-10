// src/utils/authUtils.js

export const fetchProtectedData = async (navigate) => {
  const token = localStorage.getItem("token");

  // Kiểm tra nếu không có token trong localStorage
  if (!token) {
    return { isValid: false, data: null }; // Trả về isValid: false nếu không có token
  }

  try {
    const response = await fetch("/api/protected", {
      method: "GET",
      headers: {
        Authorization: token, // Gửi token trong header
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return { isValid: true, data }; // Trả về isValid: true khi token hợp lệ và kèm dữ liệu
    } else if (response.status === 401) {
      // Token hết hạn hoặc không hợp lệ
      const errorData = await response.json();
      console.error("Token has expired or is invalid:", errorData.message);

      // Xóa token nếu không hợp lệ
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");

      return { isValid: false, data: null }; // Trả về isValid: false khi token hết hạn hoặc không hợp lệ
    } else {
      console.error("Failed to fetch protected data");
      return { isValid: false, data: null };
    }
  } catch (error) {
    console.error("Error fetching protected data:", error);
    return { isValid: false, data: null };
  }
};
