#include <string>
#include <vector>
#include <cmath>

using namespace std;

int keypad[4][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}, {10, 0, 12}};
int leftNum = 10;
int rightNum = 12;
int left_y;
int left_x;
int right_y;
int right_x;

void find() {
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 3; j++) {
            if (keypad[i][j] == leftNum) {
                left_y = i;
                left_x = j;
            }
            if (keypad[i][j] == rightNum) {
                right_y = i;
                right_x = j;
            }
        }
    }
}

string solution(vector<int> numbers, string hand) {
    string answer = "";
    
    for (int n : numbers) {
        if (n == 1 || n == 4 || n == 7) {
            answer += 'L';
            leftNum = n;
        } else if (n == 3 || n == 6 || n == 9) {
            answer += 'R';
            rightNum = n;
        } else {
            find();
            for (int y = 0; y < 4; y++) {
                for (int x = 0; x < 3; x++) {
                    if (keypad[y][x] == n) {
                        int dis_l = abs(y - left_y) + abs(x - left_x);
                        int dis_r = abs(y - right_y) + abs(x - right_x);
                        if (dis_l < dis_r) {
                            answer += 'L';
                            leftNum = n;
                        } else if (dis_l > dis_r) {
                            answer += 'R';
                            rightNum = n;
                        } else {
                            if (hand == "left") {
                                answer += 'L';
                                leftNum = n;
                            } else {
                                answer += 'R';
                                rightNum = n;
                            }
                        }
                    }
                }
            }
        }
    }
    
    return answer;
}