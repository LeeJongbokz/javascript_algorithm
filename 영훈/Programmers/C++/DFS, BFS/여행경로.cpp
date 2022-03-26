#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<vector<string> > answer;
vector<vector<string> > _tickets;
vector<string> sv;
int visited[10001];

void dfs(int l, string s) {
    if (l == _tickets.size()) {
        answer.push_back(sv);
    } else {
        for (int i = 0; i < _tickets.size(); i++) {
            if (visited[i]) continue;
            if (s == _tickets[i][0]) {
                visited[i] = 1;
                sv.push_back(_tickets[i][1]);
                dfs(l + 1, _tickets[i][1]);
                visited[i] = 0;
                sv.pop_back();
            }
        }
    }
}

vector<string> solution(vector<vector<string> > tickets) {
    _tickets = tickets;
    sv.push_back("ICN");
    dfs(0, "ICN");
    sort(answer.begin(), answer.end());
    
    return answer[0];
}