#include <string>
#include <vector>

using namespace std;

string solution(string number, int k) {
    string answer = "";
    int len = number.length() - k;
    int start = 0;
    
    for (int i = 0; i < len; i++) {
        char max = 0;
        for (int j = start; j <= i + k; j++) {
            if (number[j] > max) {
                max = number[j];
                start = j + 1;
            }
        }
        answer += max;
    }
    
    return answer;
}