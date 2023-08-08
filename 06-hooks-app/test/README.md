## Renderizar o hacer funcionar un hooks en con testing-library

__renderHook__
```
renderHook(()=>hookPersonalizado())
```
```
Este hook nos devuelve un resultado de esta forma const {result} = renderHook(()=> hookPersonalizado())
```
## Si es un valor el que debe testear
```
expect(valor-original).toBe(valor-a-comparar);
```

## Si es una funcion la que debemos testear
```
expect(funcion-original).toEqual(expect.any(funcion-a-comparar))
```

# Si queremos agregar un nuevo valor a un campo de un formulario
__1. Desestructuramos result__
```
const { result } = renderHook(() => useForm(initialForm));
```
__2.Buscamos la funcion que se encarga de recibir los valores al escribir__
```
const {onChangeForm}=result.current;
```
__3.Act es un funcion de React-Testing-Libray, se encarga de realizar una accion, que recibe un callback como parametro__
```
1.Funcion Act.
2.Funcion que toma los valores de los input.
3.Target y escribir los campos que queremos que tome los nuevos valores o los compare.

act(() => onChangeForm({ target: { name:"name", value: inputNewValue }}))
```
__4.Hacemos el test con expect().toBe()__
```
Debemos buscar el valor actual,accendiendo al valor current del formulario.

# current es el valor actual. #

## formState es el estado donde se almacenan los datos del formulario. ##

expect(result.current.formState.name).toBe(inputNewValue);
```