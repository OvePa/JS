Static Polymorphism

Dynamic Polymorphism

Polymorphism that is resolved during compile-time is known as static polymorphism.

Polymorphism that is resolved during runtime is known as dynamic polymorphism.

Method overloading is used in static polymorphism.

Method overriding is used in dynamic polymorphism.

Mostly used to increase the readability of the code.

Mostly used to have a separate implementation for a method that is already defined in the base class.

Arguments must be different in the case of overloading.

Arguments must be the same in the case of overriding.

Return type of the method does not matter.

Return type of the method must be the same.

Private and sealed methods can be overloaded.

Private and sealed methods cannot be overridden.

Gives better performance because the binding is being done at compile-time.

Gives worse performance because the binding is being done at runtime.