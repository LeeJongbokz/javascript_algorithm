#include <string>
#include <vector>
#include <cmath>

using namespace std;

vector<int> solution(int brown, int yellow) {
    vector<int> answer;
    
    for (int i = 1; i <= sqrt(yellow); i++) {
        int r = 0;
        int c = 0;
        if (yellow % i == 0) {
            r = i;
            c = yellow / i;
        }
        if (r * 2 + c * 2 + 4 == brown) {
            answer.push_back(c + 2);
            answer.push_back(r + 2);
        }
    }
    
    return answer;
}