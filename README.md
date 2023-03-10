# javascript-complete-guide
자바스크립트 완벽가이드!

### null / undefined / NaN

#### undefined
- undefined는 초기화 되지 않은 변수의 기본값입니다. 
변수를 생성한 후에 등호로 값을 할당하지 않을 경우 이 변수는 undefined가 반환된다.
ex) undefined는 요소를 생성하지 않은 인덱스에서 배열 요소에 접근하려 했을때 나올 수 있다. (아직 없는 요소에 접근하려고 했기 때문)
그렇기 때문에 undefined는 아무것도 없음을 나타내는 값입니다.
이는 별도의 데이터 유형이기도 하다. 숫자와 문자열이 데이터 유형인 것처럼 undefined 또한 데이터 유형이다. 

- undefined는 직접 값으로 할당하면 안된다. ( = undefined )를 입력하면 안된다. 
이는 값을 할당한 적이 없을 경우의 기본값일 뿐이기 때문이다. 코드를 통해 뭔가를 얻은 경우에는 이 값이 undefined인지 아닌지 분간하기 어려울 수 있는데 이 유형은 반드시 알아야 한다. 


#### null
null은 undefined와 유사한데 데이터가 없다는 의미이다. undefined는 변수 등에 새로운 값을 할당하지 않은 경우에 기본값을 나타내는 반면 null은 절대 기본값이 될 수 없다. 해당 값을 사용하려면 무언가를 null로 설정해줘야 한다. 
이는 변수를 재설정하거나 정리하고 싶을 때 자주 쓰게 되는데 예를 들어, 사용자 입력값이 있고 이를 재설정하려는 경우에 이를 빈 문자열로 설정할 수도 있겠지만 null로 설정해서 현재 프로그램에서는 어떠한 값도 입력하지 않았으므로 이 값은 없어야 한다는 것을 명확히 알려줄 수도 있다. 이는 나중에 값이 설정됐는지 확인하기 위해 if문을 써서 조건을 확인할 경우 특히 유용하다. 
undefined와 null은 빈 데이터를 관리할 때 중요하다. 이는 한번도 설정한 적이 없거나 혹은 빈 데이터, 즉 null로 설정해야하는 데이터이기 때문이다. 이 둘은 설명처럼 매우 유사하지만 같지는 않다. 


- `typeof undefined`는 출력하면 `undefined`이다. <br />
- `typeof null`은 출력하면 `object`이다. <br />
  하지만 이는 여전히 원시 타입(primitive value)로, JavaScript에서는 구현 버그로 간주한다.<br />
- `undefined == null`은 `true`이다.


#### NaN
또 다른 유형의 특별한 값은 숫자가 아니라는 의미인 NaN이다. 그 자체로 유형인 undefined와 null과는 달리 엄밀히 말하자면 NaN은 자체 유형이 아니라 숫자 유형이기 때문에 숫자를 사용하는 계산에 사용할 수 있다. 
NaN은 일종의 오류 코드로 숫자가 포함되지 않은 무언가로 계산을 실행하는 경우에 사용한다.  (예를 들어, 텍스트 같은 것을 곱할 경우에 그 결과는 NaN이 된다. )또 NaN을 사용해 계산을 실행해도 NaN을 얻게 된다. 
그러니까 계산에 NaN을 사용하면 NaN이라는 값이 나오는데 이는 그 계산의 결과가 유효하지 않다는 의미이다. 
그렇다면 이런 유효하지 않은 계산을 왜 실행하는지 궁금할텐데 자바스크립트는 매우 동적인 코드 작성이 가능한 언어이다. 

계산기의 경우를 예로 들자면 사용자는 아무 값이나 넣을 수 있고 꼭 숫자를 입력하지 않아도 상관이 없다. 그 결과 NaN인 사용자 입력으로도 계산을 실행할 수 있었으며 그럴 경우 NaN이라는 결과를 얻을 수 있게 되는 것이다. 이 또한 유효하지 않은 결과를 얻었을 경우 이를 비교하거나 if문을 사용해서 코드를 실행해 확인할 경우에 매우 유용하게 사용되는데 그러려면 이 유형에 대해 알아야 한다. 

