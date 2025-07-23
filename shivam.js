const levels = [
    /* ───────────────────────── 1. VARIABLES & DATA TYPES ───────────────────────── */
    {
      name: 'Variables & Data Types',
      problems: [
        { q: 'int ___ = 5;', a: 'x' },
        { q: "char ___ = 'A';", a: 'ch' },
        { q: 'float ___ = 3.14f;', a: 'pi' },
        { q: 'double ___ = 9.81;', a: 'g' },
        { q: 'unsigned int ___ = 42;', a: 'u' },
        { q: 'short ___ = 10;', a: 's' },
        { q: 'long ___ = 100000L;', a: 'l' },
        { q: 'const int ___ = 7;', a: 'MAX' },
        { q: 'printf("%d", ___);', a: 'x' },
        { q: 'printf("%c", ___);', a: 'ch' },
        { q: 'scanf("%d", &_);', a: 'x' },
        { q: 'int ___[5];', a: 'arr' },
        { q: '___ main() { return 0; }', a: 'int' },
        { q: '#include <_>', a: 'stdio.h' },
        { q: 'sizeof(_);', a: 'int' },
        { q: 'char ___[20] = "Hello";', a: 'str' },
        { q: 'double ___ = 6.022e23;', a: 'avogadro' },
        { q: 'long double ___ = 3.14159L;', a: 'pi_long' },
        { q: 'bool ___ = 1;', a: 'flag' },
        { q: 'volatile int ___;', a: 'sensor' }
      ]
    },
    /* ───────────────────────── 2. OPERATORS & EXPRESSIONS ──────────────────────── */
    {
      name: 'Operators & Expressions',
      problems: [
        { q: 'int sum = 5 ___ 3;', a: '+' },
        { q: 'int diff = 5 ___ 3;', a: '-' },
        { q: 'int prod = 5 ___ 3;', a: '*' },
        { q: 'int quot = 6 ___ 3;', a: '/' },
        { q: 'int rem = 7 ___ 3;', a: '%' },
        { q: 'a ___= 4;', a: '+=' },
        { q: 'b ___= 2;', a: '*=' },
        { q: 'int shift = 1 ___ 3;', a: '<<' },
        { q: 'int shift = 8 ___ 2;', a: '>>' },
        { q: 'int res = 5 ___ 3; // AND', a: '&' },
        { q: 'int res = 5 ___ 3; // OR', a: '|' },
        { q: 'int res = 5 ___ 3; // XOR', a: '^' },
        { q: 'int notA = ___a;', a: '~' },
        { q: 'int cond = (x ___ 5); // >', a: '>' },
        { q: 'int cond = (x ___ 5); // ≤', a: '<=' },
        { q: 'int cond = (x ___ 5); // ==', a: '==' },
        { q: 'int cond = (x ___ 5); // !=', a: '!=' },
        { q: 'int cond = (x>0 ___ x<10);', a: '&&' },
        { q: 'int cond = (x<0 ___ x>10);', a: '||' },
        { q: 'int max = (a>b) ___ a : b;', a: '?' }
      ]
    },
    /* ───────────────────────── 3. CONDITIONALS & BRANCHING ─────────────────────── */
    {
      name: 'Conditionals & Branching',
      problems: [
        { q: '___ (x > 0) { printf("positive"); }', a: 'if' },
        { q: 'if (x%2==0) { printf("even"); } ___ { printf("odd"); }', a: 'else' },
        { q: 'if (s>90) g=\'A\'; ___ (s>80) g=\'B\';', a: 'else if' },
        { q: 'switch(day) { case 1: printf("Mon"); ___; }', a: 'break' },
        { q: 'switch(ch) { ___ \'a\': puts("vowel"); break; }', a: 'case' },
        { q: 'if (ptr == ___) puts("NULL");', a: 'NULL' },
        { q: 'if (flag ___ 1) puts("true");', a: '==' },
        { q: 'if (!(x ___ y)) puts("diff");', a: '==' },
        { q: 'if (num%2 ___ 0) puts("even");', a: '==' },
        { q: 'if (age>=18 ___ age<60) puts("adult");', a: '&&' },
        { q: 'if (temp<0 ___ temp>100) puts("extreme");', a: '||' },
        { q: 'int res = (a>b) ___ a : b;', a: '?' },
        { q: 'if (ptr ___ NULL) puts("valid");', a: '!=' },
        { q: 'if (error) ___;', a: 'return' },
        { q: 'if (strcmp(s1,s2) ___ 0) puts("equal");', a: '==' },
        { q: '#define MAX(a,b) ((a) ___ (b)?(a):(b))', a: '>' },
        { q: 'if (fopen("f","r") ___ NULL) puts("open");', a: '!=' },
        { q: 'if (isupper(c)) c = ___(c);', a: 'tolower' },
        { q: 'perror("_");', a: 'read' },
        { q: 'remove("tmp") ___ 0 ? puts("ok"):puts("fail");', a: '==' }
      ]
    },
    /* ───────────────────────── 4. LOOPS ───────────────────────── */
    {
      name: 'Loops',
      problems: [
        { q: 'for(int i=0;i<10;_) printf("%d",i);', a: 'i++' },
        { q: 'int i=0; while(___ < 5) i++;', a: 'i' },
        { q: 'for(_=0;i<n;i++) sum+=i;', a: 'i' },
        { q: 'int i=0; ___ (i<n) { i++; }', a: 'while' },
        { q: 'do { i++; } ___ (i<10);', a: 'while' },
        { q: 'for(int i=0; ___; i++) sum+=i;', a: 'i<10' },
        { q: 'for(int i=10;i>0;_) printf("%d",i);', a: 'i--' },
        { q: 'while(1){ if(i==10) ___; i++; }', a: 'break' },
        { q: 'for(int i=0;i<n;i++){ if(i==3) ___; }', a: 'continue' },
        { q: 'int i=0; ___ { puts("hi"); } while(i++<5);', a: 'do' },
        { q: 'for(int i=0;i<strlen(s);_) puts("C");', a: 'i++' },
        { q: 'while((c=getchar()) ___ EOF) cnt++;', a: '!=' },
        { q: 'for(int i=_;i>=0;i--) printf("%d",i);', a: 'n' },
        { q: 'int sum=0; for(int i=0;i<5;i++) sum ___ arr[i];', a: '+=' },
        { q: 'swap(&arr[0], &_[1]);', a: 'arr' },
        { q: '#define LOOP for(_=0;i<10;i++)', a: 'i' },
        { q: 'for(int i=0;i<n;_) { /step2/ }', a: 'i+=2' },
        { q: 'do { printf("%d",i); ___; } while(i<5);', a: 'i++' },
        { q: 'for(int i=0; ___ ; i++) break;', a: 'i<1' },
        { q: '_(int i=0;i<5;i++) printf("%d",i);', a: 'for' }
      ]
    },
    /* ───────────────────────── 5. FUNCTIONS ───────────────────── */
    {
      name: 'Functions',
      problems: [
        { q: 'int ___(int a,int b){return a+b;}', a: 'add' },
        { q: 'void ___(){puts("Hello");}', a: 'greet' },
        { q: 'int max(int a,int b){ ___(a>b) return a; else return b; }', a: 'if' },
        { q: '___ factorial(int n);', a: 'int' },
        { q: 'int factorial(int n){ if(n==0) return 1; return n ___ factorial(n-1); }', a: '*' },
        { q: 'void swap(int *a,int *b){ int t=*a; *a=*b; *b=_; }', a: 't' },
        { q: 'static ___ counter=0;', a: 'int' },
        { q: 'double area(double r){return 3.14159 * r ___ r;}', a: '*' },
        { q: 'int square(int x){return x ___ x;}', a: '*' },
        { q: 'void printArr(int a[],int n){for(int i=0;i<n;i++) printf("%d ", ___);}', a: 'a[i]' },
        { q: 'float avg(int s,int n){return s ___ (float)n;}', a: '/' },
        { q: 'void ___(); // forward decl', a: 'init' },
        { q: 'int power(int b,int e){int p=1;while(e--) p ___= b;return p;}', a: '*' },
        { q: 'void setFlag(___ *f){*f=1;}', a: 'int' },
        { q: 'int get(int a[],int i){return ___[i];}', a: 'a' },
        { q: 'inline ___ cube(int x){return x*x*x;}', a: 'int' },
        { q: 'int abs(int x){return(x<0)?-x:_;}', a: 'x' },
        { q: 'void clr(){int c;while((c=getchar()) ___ \'\\n\'&&c!=EOF);}', a: '!=' },
        { q: 'void ___(int *p){free(p);}', a: 'release' },
        { q: 'int randIn(int l,int h){return rand() % (h-l+1) ___ l;}', a: '+' }
      ]
    },
    /* ───────────────────────── 6. ARRAYS ──────────────────────── */
    {
      name: 'Arrays',
      problems: [
        { q: 'int ___[5]={1,2,3,4,5};', a: 'arr' },
        { q: 'printf("%d",arr[_]);', a: '2' },
        { q: 'for(int i=0;i<5;_) sum+=arr[i];', a: 'i++' },
        { q: 'int len=sizeof(arr) ___ sizeof(arr[0]);', a: '/' },
        { q: 'char str[20]; ___(str,"Hi");', a: 'strcpy' },
        { q: 'int m[2][3]; m[1][_]=10;', a: '2' },
        { q: 'int zero[5]; ___(zero,0,sizeof(zero));', a: 'memset' },
        { q: 'total=0;for(int i=0;i<5;i++) total ___ arr[i];', a: '+=' },
        { q: 'swap(&arr[0],->_[1]);', a: 'arr' },
        { q: 'nums[SIZE ___ 1]=99;', a: '-' },
        { q: 'char str[6]="Hello";str[5]=_;', a: '\\0' },
        { q: 'int n=_(a)/sizeof(a[0]);', a: 'sizeof' },
        { q: 'puts(_);', a: 'str' },
        { q: 'int a[3]={1}; // rest = ___', a: '0' },
        { q: 'arr[_]=1; // first', a: '0' },
        { q: 'arr[_]=1; // last', a: '9' },
        { q: 'for(int i=0;i<sizeof(arr)/sizeof(arr[0]);_) sum+=arr[i];', a: 'i++' },
        { q: 'int a[3]={1,_,3};', a: '2' },
        { q: 'copy[i]=_[i];', a: 'arr' },
        { q: 'int multi[2][2]={{1,2},{3,_}};', a: '4' }
      ]
    },
    /* ───────────────────────── 7. STRINGS ────────────────────── */
    {
      name: 'Strings',
      problems: [
        { q: 'char s[20]; ___(s,"Hi");', a: 'strcpy' },
        { q: 'int n=_("Hello");', a: 'strlen' },
        { q: '_("Hi","Bye"); // cmp', a: 'strcmp' },
        { q: 'char *p = ___("Hi");', a: 'strdup' },
        { q: 'char d[20]="Hi"; ___(d,"!");', a: 'strcat' },
        { q: 'printf("%c",s[_]);', a: '0' },
        { q: 's[_]=\'a\';', a: '1' },
        { q: 'char* t=_(s," ");', a: 'strtok' },
        { q: '_(buf, sizeof(buf), stdin);', a: 'fgets' },
        { q: 'sprintf(buf,"%s %d",s, ___);', a: 'num' },
        { q: '_(s,\'\\n\');', a: 'strchr' },
        { q: 'char* q=strr_(s,\'l\');', a: 'chr' },
        { q: 'int c=strn_(s1,s2,3);', a: 'cmp' },
        { q: '_(w,0,sizeof(w));', a: 'memset' },
        { q: 'size_t k=_(s,\'e\');', a: 'strcspn' },
        { q: 'strncpy(d,s,_);', a: '4' },
        { q: 'puts(_);', a: 's' },
        { q: 'int v=atoi("_");', a: '123' },
        { q: 'double d=_("3.14");', a: 'atof' },
        { q: 'sprintf(buf,"%s",_);', a: 's' }
      ]
    },
    /* ───────────────────────── 8. POINTERS ───────────────────── */
    {
      name: 'Pointers',
      problems: [
        { q: 'int x=10; int *___=&x;', a: 'ptr' },
        { q: 'printf("%d",*_);', a: 'ptr' },
        { q: 'int a[5]; int *p=_;', a: 'a' },
        { q: 'int **pp= &_;', a: 'ptr' },
        { q: 'p = p ___ 1;', a: '+' },
        { q: '*(a ___ 2) == a[2];', a: '+' },
        { q: 'while(*s ___ \'\\0\') s++;', a: '!=' },
        { q: 'int m=(int)_(4*sizeof(int));', a: 'malloc' },
        { q: 'free(_);', a: 'm' },
        { q: 'if(p ___ NULL) puts("not null");', a: '!=' },
        { q: 'void *vp = &_;', a: 'x' },
        { q: 'int (*fp)(int)=_;', a: 'func' },
        { q: 'struct N{int d;struct N* ___;};', a: 'next' },
        { q: 'pp->___ == (*pp).x;', a: 'x' },
        { q: '++*p // inc ___ value', a: 'pointed' },
        { q: '(*p)++ // inc ___ value', a: 'pointed' },
        { q: 'printf("%p",(void*)_);', a: 'p' },
        { q: 'char **argv -> array of ___', a: 'pointers' },
        { q: 'int *(*f)(void) returns ptr to ___', a: 'int' },
        { q: 'p = &a[_];', a: '0' }
      ]
    },
    /* ───────────────────────── 9. STRUCTS & ENUMS ────────────── */
    {
      name: 'Structures & Enums',
      problems: [
        { q: 'struct ___ {int x;int y;};', a: 'Point' },
        { q: 'struct Point p; p.___ = 10;', a: 'x' },
        { q: 'enum Color {RED,GREEN,_};', a: 'BLUE' },
        { q: 'typedef struct Node{int d;struct Node* n;} ___;', a: 'Node' },
        { q: 'struct Point p={.x=0,.y=_};', a: '0' },
        { q: 'struct Person{char n[20];int age;}; struct Person p={"Bob",_};', a: '25' },
        { q: 'enum Day{SUN=0,MON,_};', a: 'TUE' },
        { q: 'struct Rect{struct Point tl;struct Point ___;};', a: 'br' },
        { q: 'enum{FALSE,_} bool;', a: 'TRUE' },
        { q: 'struct Date{int d,m,y;}; ___ Date t;', a: 'struct' },
        { q: 'struct Node{int d;struct Node* ___;};', a: 'n' },
        { q: 'typedef enum{OFF,ON} ___;', a: 'Switch' },
        { q: 'enum Color c = ___;', a: 'RED' },
        { q: 'p.x=5; p._=6;', a: 'y' },
        { q: 'sizeof(struct Point) == ___; // 32-bit', a: '8' },
        { q: 'struct Point *pp = &_;', a: 'p' },
        { q: '(*pp).x == pp->_;', a: 'x' },
        { q: 'enum{JAN=1,FEB,MAR,_};', a: 'APR' },
        { q: 'struct{int r,g,b;} ___;', a: 'color' },
        { q: 'typedef struct{int id;char n[20];} ___;', a: 'Student' }
      ]
    },
    /* ───────────────────────── 10. FILE I/O ──────────────────── */
    {
      name: 'File I/O',
      problems: [
        { q: 'FILE *fp = ___("data.txt","r");', a: 'fopen' },
        { q: 'char line[100]; ___(line,100,fp);', a: 'fgets' },
        { q: '_(line,fp);', a: 'fputs' },
        { q: 'fprintf(fp,"%d",_);', a: 'num' },
        { q: '_(fp);', a: 'fclose' },
        { q: 'long pos=_(fp);', a: 'ftell' },
        { q: '_(fp,0,SEEK_SET);', a: 'fseek' },
        { q: 'int c=_(fp);', a: 'fgetc' },
        { q: '_(c,fp);', a: 'fputc' },
        { q: 'FILE *out=_("out.txt","w");', a: 'fopen' },
        { q: 'size_t n=_(buf,1,100,fp); // write', a: 'fwrite' },
        { q: 'size_t m=_(buf,1,100,fp); // read', a: 'fread' },
        { q: 'rewind(_);', a: 'fp' },
        { q: '_(stdout,"Hello");', a: 'fputs' },
        { q: 'perror("read"); // prints ___ msg', a: 'error' },
        { q: 'remove("tmp.txt") ___ 0;', a: '==' },
        { q: 'int fd=fileno(_);', a: 'fp' },
        { q: 'FILE *tmp=_("tmpXXXXXX","w+");', a: 'tmpfile' },
        { q: 'fflush(_);', a: 'fp' },
        { q: 'fprintf(stderr,"err:%d",_);', a: 'err' }
      ]
    }
  ];
  
  /* ───────────────────────── GAME STATE ───────────────────────── */
  
  let levelIndex = 0;
  let problemIndex = 0;
  let score = 0;
  
  window.addEventListener('DOMContentLoaded', renderProblem);
  
  function renderProblem() {
    const levelBox = document.getElementById('level');
    const level = levels[levelIndex];
    const prob = level.problems[problemIndex];
  
    // replace first occurrence of ___ with an input
    const htmlQuestion = prob.q.replace('_',
      '<input id="answer" type="text" autocomplete="off" style="width:80px;" />');
  
    levelBox.innerHTML = `
        <h2>Level ${levelIndex + 1}: ${level.name}</h2>
        <pre class="code">${htmlQuestion}</pre>
        <button onclick="checkAnswer()">Submit</button>
        <button id="nextBtn" onclick="nextProblem()" style="display:none;">Next</button>
        <p id="feedback"></p>
        <p>Score: <span id="score">${score}</span></p>
    `;
    document.getElementById('answer').focus();
  }
  
  function checkAnswer() {
    const user = (document.getElementById('answer').value || '').trim();
    const correct = levels[levelIndex].problems[problemIndex].a;
    const fb = document.getElementById('feedback');
  
    if (user === correct) {
      fb.textContent = '✅  Correct!';
      fb.style.color = 'limegreen';
      score += 10;
      document.getElementById('score').textContent = score;
      document.getElementById('nextBtn').style.display = 'inline-block';
    } else {
      fb.textContent = '❌  Try again.';
      fb.style.color = 'crimson';
    }
  }
  
  function nextProblem() {
    problemIndex++;
    if (problemIndex >= levels[levelIndex].problems.length) {
      problemIndex = 0;
      levelIndex++;
      if (levelIndex >= levels.length) {
        alert('🏁 All levels cleared!\nYour total score: ' + score);
        // reset game
        levelIndex = 0;
        score = 0;
      }
    }
    renderProblem();
  }