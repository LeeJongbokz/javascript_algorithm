#include <string>
#include <vector>

using namespace std;

int answer = 0;
int _target;
vector<int> _numbers;

void dfs(int l, int sum) {
    if (l == _numbers.size()) {
        if (sum == _target) answer++;
    } else {
        dfs(l + 1, sum - _numbers[l]);
        dfs(l + 1, sum + _numbers[l]);
    }
}

// void dfs(int l, int sum, vector<int> numbers) {
//     if (l == numbers.size()) {
//         if (sum == _target) answer++;
//     } else {
//         dfs(l + 1, sum - numbers[l], numbers);
//         dfs(l + 1, sum + numbers[l], numbers);
//     }
// }

int solution(vector<int> numbers, int target) {
    _numbers = numbers;
    _target = target;
    
    // dfs(0, 0, numbers);
    dfs(0, 0);

    return answer;
}