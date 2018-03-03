// 예제 1-11 전역 변수 남용의 결과

function showScope() {
    scope = "local";
    return scope;
}

scope = "global";
print(scope); // "global" 출력
print(showScope()); // "local" 출력
print(scope); // "local" 출력
