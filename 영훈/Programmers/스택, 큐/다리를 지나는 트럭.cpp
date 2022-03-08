#include <string>
#include <vector>
#include <queue>

using namespace std;

int solution(int bridge_length, int weight, vector<int> truck_weights) {
    int answer = 0;
    int sum = 0;
    queue<pair<int, int>> q;
    queue<int> q_wait;
    
    for (auto t : truck_weights) {
        q_wait.push(t);
    }
    
    answer++;
    sum += q_wait.front();
    q.push(make_pair(q_wait.front(), answer));
    q_wait.pop();
    
    while (!q.empty()) {
        answer++;
        int front_weight = q.front().first;
        int front_time = q.front().second;
        if (answer >= front_time + bridge_length) {
            sum -= front_weight;
            q.pop();
        }
        if (!q_wait.empty()) {
            int next = q_wait.front();
            if (sum + next <= weight) {
                q.push(make_pair(next, answer));
                sum += next;
                q_wait.pop();
            }   
        }
    }
    
    return answer;
}