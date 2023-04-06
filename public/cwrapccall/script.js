const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const result = document.getElementById("kq");

const btn = document.getElementById("mybutton");

// ccall
const add = Module.cwrap("Add", "number", ["number", "number"]); // cwrap định nghĩa 1 hàm và chưa được thực thi ngay lập tức

function run_wasm() {
  if (value1.value && value2.value) {
    const a = add(value1.value, value2.value);

    const b = Module.ccall(
      "Add",
      "number",
      ["number", "number"],
      [value1.value, value2.value]
    ); // ccall được định nghĩa và thực thi luôn tại thời điểm định nghĩa

    result.innerText = `${value1.value} + ${value2.value} = ${a}`;
    console.log(a, b);
  }
}

btn.addEventListener("click", run_wasm);

//Worker
// if (window.Worker) {
//   const myWorker = new Worker("worker.js");

//   value1.onchange = function () {
//     myWorker.postMessage([value1.value, value2.value]);
//     console.log("Main: Message posted to worker");
//   };

//   value2.onchange = function () {
//     myWorker.postMessage([value1.value, value2.value]);
//     console.log("Main: Message posted to worker");
//   };

//   myWorker.onmessage = function (e) {
//     console.log(e);
//     result.textContent = e.data;
//     console.log("Main: Message received from worker");
//   };
//   // myWorker.terminate();
// } else {
//   console.log("Your browser doesn't support web workers.");
// }
