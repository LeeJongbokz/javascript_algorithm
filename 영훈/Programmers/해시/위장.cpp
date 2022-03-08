#include <string>
#include <vector>
#include <unordered_map>

using namespace std;

int solution(vector<vector<string> > clothes) {
    int answer = 1;
    unordered_map<string, int> m;
    // unordered_map<string, int>::iterator iter;
    
    // for (int i = 0; i < clothes.size(); i++) {
    //     m[clothes[i][1]] += 1;
    // }
    
    // for (iter = m.begin(); iter != m.end(); iter++) {
    //     answer *= iter->second + 1;
    // }
    
    for (auto c : clothes) {
        m[c[1]] += 1;
    }
    
    for (auto it : m) {
        answer *= it.second + 1;
    }
    
    return answer - 1;
}