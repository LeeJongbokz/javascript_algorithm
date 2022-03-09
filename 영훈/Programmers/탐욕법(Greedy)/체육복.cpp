#include <string>
#include <vector>

using namespace std;

int a[31];

int solution(int n, vector<int> lost, vector<int> reserve) {
    int answer = 0;
    
    for (int i : lost) {
        a[i]--;
    }
    for (int i : reserve) {
        a[i]++;
    }
    
    for (int i = 1; i <= n; i++) {
        if (a[i] < 0) {
            if (a[i - 1] == 1) a[i] = a[i - 1] = 0;
            else if (a[i + 1] == 1) a[i] = a[i + 1] = 0;
        }
        if (a[i] >= 0) answer++;
    }
    
    return answer;
}