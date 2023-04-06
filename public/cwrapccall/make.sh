MODULE_NAME=cwrapccall
OUTPUT_JS=cwrapccall.js
OUTPUT_WASM=cwrapccall.wasm

emcc -O3 ${MODULE_NAME}.cpp \ 
-o $OUTPUT_JS \
-s WASM=1 \
-s NO_EXIT_RUNTIME=1 \
-s EXPORTED_RUNTIME_METHODS=ccall,cwrap \
-s 'ENVIRONMENT="web"'