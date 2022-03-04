#include <string>
#include <vector>
#include <queue>

using namespace std;

int solution(int n, vector<vector<int> > computers) {
    int answer = 0;
    int visited[201] = {};
    queue<int> q;
    
    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            visited[i] = 1;
            q.push(i);
            answer++;
        }
        while (!q.empty()) {
            int pos = q.front();
            q.pop();
            for (int next = 0; next < n; next++) {
                if (!visited[next] && computers[pos][next]) {
                    visited[next] = 1;
                    q.push(next);
                }
            }
        }
    }
    
    return answer;
}