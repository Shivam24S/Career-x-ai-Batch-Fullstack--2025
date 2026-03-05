

// 1 2 3 4 5 5 4 3 2 1
// 1 2 3 4     4 3 2 1
// 1 2 3         3 2 1
// 1 2             2 1
// 1                 1


#include <stdio.h>


int main(){
    
    
    int n=5;
    
    
    for(int i=1;i<=n;i++){
        
        for(int j=1;j<=n-i+1;j++ ){
            printf("%d",j);
        }
        
        for(int k=1; k<=2*(i-1);k++ ){
            printf(" ");
        }
        
        for(int l=n-i+1;l>=1;l--){
            printf("%d",l);
        }
         printf("\n");
        
    }
    

   
        
    
    return 0;
}