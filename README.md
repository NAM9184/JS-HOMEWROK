# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---
1. 페이지 동작 

디자인 베이스는 네이버 로그인 페이지로 아이디와 비밀번호를 입력 후 로그인 버튼을 click하게 되었을떄 
welcome.html 이동하도록 설계하였습니다.


2. 페이지 동작 조건

'입력조건' 과 '로그인 조건' 을 분리하여 두 조건이 모두 충족되었을 경우에만 welcome.html로 이동하는 것으로
위 두개의 조건을 js코드로 구현했습니다.


===

아이디 ,비밀번호 유효성 검사

emailReg, pwReg 함수를 생성하여 
내부에 id입력창의 value값을 반영한 후
이를 조건문사용해 유효한 방식이 아닐시 알림이 뜨도록 설계하였습니다.

===

로그인 버튼 활성화
handleSubmit 함수를 생성하여
idFeild의 값과 user.id의 값 그리고 pwFeild 와 user.pw의 값이 동일하게 잘성되어있는지 조건문을 통해서 판별하고 조건이 일치하면 welcome.html로 이동하며 
아닐시 알림이 나오도록 설계하였습니다.




