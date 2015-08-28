var eventOffset = function(evt, type){
	type = type.toUpperCase();
	var targetType = (type === 'X') ? 'Left' : 'Top';
	
	if(typeof evt['offset'+type] == 'undefined'){
		evt.offset['offset'+type] = evt['layer'+type] - evt.currentTarget['offset'+targetType];
	}
	
	return evt['offset'+type];
	
};
