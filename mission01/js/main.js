const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

const idFeild = document.querySelector("#userEmail");
const pwFeild = document.querySelector("#userPassword");
const loginButton = document.querySelector(".btn-login");
const errorMessage = document.querySelectorAll(".error-message");
/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

// 아이디 이메일 유효성검사
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let email = idFeild.value;
  if (!re.test(email)) {
    errorMessage[0].classList.add("is-active");
    console.log("유효하지 않은 이메일 형식입니다.");
    return false;
  }
  // if (!email) {
  //   errorMessage.classList.remove("is-active");
  //   console.log("이메일 주소를 입력하세요.");
  //   return false;
  // }
  // 이메일의 값이 존재하지 않을때 = 공백일때  에러메세지를 지우고 싶으나 진행중
  errorMessage[0].classList.remove("is-active");
  console.log("유효한 이메일 형식 입니다.");
  return re.test(String(text).toLowerCase());
}

// 비밀번호 유효성 검사
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  if (!re.test(pwFeild.value)) {
    errorMessage[1].classList.add("is-active");
    console.log("유효하지 않은 이메일 형식입니다.");
    return false;
  }
  errorMessage[1].classList.remove("is-active");
  console.log("올바른 비밀번호입니다.");
  return re.test(String(text).toLowerCase());
}


// 로그인 버튼 활성화
function hadnleSubmit(e) {
  e.preventDefault();
  if (idFeild.value === user.id && pwFeild.value === user.pw) {
    window.location.href = "welcome.html";
  } else {
    console.log("로그인 실패: 아이디 또는 비밀번호가 일치하지 않습니다.");
    alert("로그인 실패: 아이디 또는 비밀번호가 일치하지 않습니다.");
  }
}

idFeild.addEventListener("input", emailReg);
pwFeild.addEventListener("input", pwReg);
loginButton.addEventListener("click", hadnleSubmit);
