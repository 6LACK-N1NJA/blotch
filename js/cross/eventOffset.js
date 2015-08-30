var eventOffset = function(evt, type){
	var targetType;
	type = type.toUpperCase();
	targetType = (type === 'X') ? 'Left' : 'Top';
	
	if(typeof evt['offset'+type] == 'undefined'){
		evt.offset['offset'+type] = evt['layer'+type] - evt.currentTarget['offset'+targetType];
	}
	
	return evt['offset'+type];
	
};
