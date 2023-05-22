export interface Message {
	id: string;
	premise: string;
	message: string;
	message_variations: [];
	description: string;
	message_encoder: string;
	message_decoder: string;
	spatial_context: string;
	temporal_context: string;
	type: string;
	categories: [];
	references: [];
}

export interface MessageShort {
	id: string;
	message: string;
	message_encoder: string;
	message_decoder: string;
	spatial_context: string;
	temporal_context: string;
	type: string;
}
