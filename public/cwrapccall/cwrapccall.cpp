#include <stdlib.h>
#include <emscripten.h>

extern "C" // khi biên dịch lấy phương thức ccca, cwrap bắt buộc có thẻ extern "C" nếu file là .cpp
{
    EMSCRIPTEN_KEEPALIVE // khi biên dịch lấy phương thức ccca, cwrap bắt buộc có
        int
        Add(int a, int b)
    {
        return a + b;
    }
}

// bash command: trỏ đến thư mục chứa make.sh => run 'bash make.sh' trên bash command