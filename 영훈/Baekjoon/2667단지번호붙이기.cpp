#include <iostream>
#include <cstdio>
#include <algorithm>
using namespace std;

int n;
int a[26][26];
int d[26][26];
int dy[4] = { -1, 0, 1, 0 };
int dx[4] = { 0, 1, 0, -1 };
int ans[25 * 25];

void dfs(int y, int x, int cnt) {
  d[y][x] = cnt;
  for (int k = 0; k < 4; k++) {
    int ny = y + dy[k];
    int nx = x + dx[k];
    if (ny >= 0 && nx >= 0 && ny < n && nx < n) {
      if (a[ny][nx] == 1 && d[ny][nx] == 0) {
        dfs(ny, nx, cnt);
      }
    }
  }
}

int main() {
  cin >> n;

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      scanf("%1d", &a[i][j]);
    }
  }

  int cnt = 0;
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      if (a[i][j] == 1 && d[i][j] == 0) {
        dfs(i, j, ++cnt);
      }
    }
  }

  cout << cnt << endl;

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      ans[d[i][j]] += 1;
    }
  }
  sort(ans + 1, ans + cnt + 1);
  for (int i = 1; i <= cnt; i++) {
    cout << ans[i] << endl;
  }

  return 0;
}