#include <string>
#include <vector>
#include <algorithm>

using namespace std;

string num = "412";

string solution(int n) {
    string answer = "";
    while (n > 0) {
        answer += num[n % 3];
        if (n % 3 == 0) n -= 3;
        n /= 3;
    }
    reverse(answer.begin(), answer.end());
    return answer;
}