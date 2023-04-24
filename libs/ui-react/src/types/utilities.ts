export type Transform<Obj extends object, NewType> = {
	[K in keyof Obj]: NewType;
};

export type PickTransform<Obj extends object, ObjKeys extends keyof Obj, NewType> = {
	[K in keyof Obj]: K extends ObjKeys ? NewType : Obj[K];
};

export type PickTransformExclusive<Obj extends object, ObjKeys extends keyof Obj, NewType> = Pick<
	PickTransform<Obj, ObjKeys, NewType>,
	ObjKeys
>;

export type OmitTransform<Obj extends object, ObjKeys extends keyof Obj, NewType> = {
	[K in keyof Obj]: K extends ObjKeys ? Obj[K] : NewType;
};

export type OmitTransformExclusive<Obj extends object, ObjKeys extends keyof Obj, NewType> = Omit<
	OmitTransform<Obj, ObjKeys, NewType>,
	ObjKeys
>;
