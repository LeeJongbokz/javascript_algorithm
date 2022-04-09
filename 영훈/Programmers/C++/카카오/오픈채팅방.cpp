#include <string>
#include <vector>
#include <queue>
#include <map>

using namespace std;

vector<string> solution(vector<string> record) {
    vector<string> answer;
    queue<pair<string, string> > q;
    map<string, string> m;
    
    for (int i = 0; i < record.size(); i++) {
        string tmp;
        vector<string> v;
        for (int j = 0; j < record[i].size(); j++) {
            if (record[i][j] == ' ') {
                v.push_back(tmp);
                tmp.clear();
            } else {
                tmp += record[i][j];
            }
        }
        v.push_back(tmp);
        if (v[0] == "Enter") {
            q.push(make_pair(v[0], v[1]));
            m[v[1]] = v[2];
        } else if (v[0] == "Leave") {
            q.push(make_pair(v[0], v[1]));
        } else {
            m[v[1]] = v[2];
        }
    }
    
    while(!q.empty()) {
        string x = q.front().first;
        string y = q.front().second;
        string result;
        q.pop();
        if (x == "Enter") {
            result = m[y] + "님이 들어왔습니다.";
        } else {
            result = m[y] + "님이 나갔습니다.";
        }
        answer.push_back(result);
    }
    
    return answer;
}