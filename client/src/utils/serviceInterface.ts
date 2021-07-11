export interface IServiceResult<Type> {
	data: Type | null;
	error: string | null;	
}