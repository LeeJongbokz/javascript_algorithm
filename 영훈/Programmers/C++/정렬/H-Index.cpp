#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> citations) {
    int answer = 0;
    
    sort(citations.begin(), citations.end());
    // 0 1 3 5 6 -> 3
    // 0 3 5 9 11 13 -> 4
    for (int i = 0; i < citations.size(); i++) {
        int hIndex = citations.size() - i;
        if (citations[i] >= hIndex) {
            answer = hIndex;
            break;
        }
    }
    
    return answer;
}