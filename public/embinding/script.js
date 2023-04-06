const result = document.getElementById("result");
//embinding thường dùng để định nghĩa các class luôn được thực thi ngay sau khi load xong không thể gán như ccall, cwrap
Module.onRuntimeInitialized = (_) => {
  const c = new Module.Counter(22); // khởi tạo class counter
  console.log(c.counter); // prints 22
  c.increase();
  console.log(c.counter); // prints 23
  console.log(c.squareCounter()); // prints 529
};
