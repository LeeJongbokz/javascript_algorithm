#include <string>
#include <iostream>
using namespace std;

bool solution(string s)
{
    int pCount = 0;
    int yCount = 0;
    
    for (int i = 0; i < s.length(); i++) {
        s[i] = tolower(s[i]);
        if (s[i] == 'p') pCount++;
        else if (s[i] == 'y') yCount++;
    }

    return pCount == yCount ? true : false;
}