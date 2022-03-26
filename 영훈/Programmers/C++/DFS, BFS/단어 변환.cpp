#include <string>
#include <vector>

using namespace std;

int answer = 51;
string _target;
vector<string> _words;
int visited[51];

void dfs(int l, string s) {
    if (s == _target) answer = min(answer, l);
    else {
        for (int i = 0; i < _words.size(); i++) {
            if (visited[i]) continue;
            int count = 0;
            for (int j = 0; j < _words[i].size(); j++) {
                if (s[j] != _words[i][j]) count++;
            }
            if (count == 1) {
                visited[i] = 1;
                dfs(l + 1, _words[i]);
                visited[i] = 0;
            }
        }
    }
}

int solution(string begin, string target, vector<string> words) {
    _target = target;
    _words = words;
        
    dfs(0, begin);
    
    return answer == 51 ? 0 : answer;
}