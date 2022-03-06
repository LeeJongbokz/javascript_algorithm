#include <string>
#include <vector>

using namespace std;

string words[] = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};

int solution(string s) {
    int answer = 0;
    string result;
    
    for (int pos = 0; pos < s.length();) {
        if (s[pos] >= '0' && s[pos] <= '9') {
            result += s[pos++];
        } else {
            for (int i = 0; i < sizeof(words); i++) {
                if (s.find(words[i], pos) == pos) {
                    result += '0' + i;
                    pos += words[i].length();
                    break;
                }
            }
        }
    }
    
    answer = stoi(result);
    
    return answer;
}