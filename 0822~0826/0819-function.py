a = 0
b = 2
print(a+b)

if a>0: 
  print('+')
elif a<0:  #if else
  print('-')
else:
  print('0')


def plus(a,b):
  result=a+b
  return result

print(plus(2,5))

#c=input() #!실행시 입력을 기다림. 입력시 c의 값이 결정되고 다음명령 실행
#print(c+'ㅋㅋ')

#d=int(input('숫자를 입력하세요'))
#print (d*10)


print('end')

arr = [0,1,2,3,4,5]

print(arr[1])
print(len(arr)) #! 값의 길이

print(type('zzzz')) #! 데이터 타입
print(type(arr))
print(type(10))

for a in arr:
  print(a,a+5)