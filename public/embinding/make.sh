MODULE_NAME=embinding
OUTPUT_JS=embinding.js
OUTPUT_WASM=embinding.wasm

emcc -O3 -lembind -o $OUTPUT_JS ${MODULE_NAME}.cpp

