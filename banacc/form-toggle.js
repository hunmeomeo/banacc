document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.wrapper');
    const registerForm = document.getElementById('register');
    const forgotPasswordForm = document.getElementById('forgot-password');
    const backButtons = document.querySelectorAll('.back-btn');

    // Chuyển đến form Đăng ký
    document.querySelector('a[href="#register"]').addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    // Chuyển đến form Quên mật khẩu
    document.querySelector('a[href="#forgot-password"]').addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('hidden');
        forgotPasswordForm.classList.remove('hidden');
    });

    // Quay lại form đăng nhập
    backButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            registerForm.classList.add('hidden');
            forgotPasswordForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('#register form');
    const popup = document.getElementById('popup');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const password = registerForm.querySelector('input[type="password"]').value;
        const confirmPassword = registerForm.querySelectorAll('input[type="password"]')[1].value;

        // Kiểm tra mật khẩu
        if (password === confirmPassword) {
            // Hiển thị thông báo thành công
            popup.classList.remove('hidden');

            // Ẩn thông báo sau 3 giây
            setTimeout(() => {
                popup.classList.add('hidden');
            }, 3000);
        } else {
            alert('Mật khẩu không khớp!');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('#register form');
    const popup = document.getElementById('popup');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = registerForm.querySelector('input[type="text"]').value;
        const password = registerForm.querySelector('input[type="password"]').value;
        const confirmPassword = registerForm.querySelectorAll('input[type="password"]')[1].value;

        // Kiểm tra mật khẩu
        if (password === confirmPassword) {
            // Lưu thông tin đăng ký vào LocalStorage
            localStorage.setItem(username, password);

            // Hiển thị popup thành công
            popup.classList.add('show');
            popup.classList.remove('hidden');

            // Ẩn popup sau 3 giây
            setTimeout(() => {
                popup.classList.remove('show');
                popup.classList.add('hidden');
            }, 3000);
        } else {
            alert('Mật khẩu không khớp!');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.wrapper form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        // Kiểm tra thông tin từ LocalStorage
        const storedPassword = localStorage.getItem(username);

        if (storedPassword && storedPassword === password) {
            // Đăng nhập thành công, chuyển hướng đến form.html
            window.location.href = 'form.html';
        } else {
            alert('Tài khoản hoặc mật khẩu không đúng!');
        }
    });
});
document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Vô hiệu hóa chuột phải
    alert("Bug cái địt mẹ mày"); // Hiển thị thông báo "Bug cc"
});

document.onkeydown = function(e) {
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0))) {
        return false; // Vô hiệu hóa F12 và Ctrl+Shift+I
    }
};

