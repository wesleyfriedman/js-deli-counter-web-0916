// var katzDeli = []

function takeANumber(katzDeliLine, new_name){
	katzDeliLine.push(new_name)
	return `Welcome, ${new_name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
	if(katzDeliLine.length === 0){
		return "There is nobody waiting to be served!"
	}
	else{
		var name = katzDeliLine[0]
		katzDeliLine.shift()
		return `Currently serving ${name}.`
	}
}

function currentLine(line){
	var string = "The line is currently: "
	if(line.length === 0){
		return"The line is currently empty."
	}
	else{
		for (var i = 0; i < line.length; i++) {
			string+= `${i + 1}. ${line[i]}`
			if(i < line.length - 1){
				string += ', '
			}
		}
		return string
	}
}