// 3.3 리스트와 반복

for(names.front(); names.currPos() < names.length(); names.next()) {
    print(names.getElement());
}


for(names.end(); names.currPos() >= 0; names.prev()) {
    print(names.getElement());
}
