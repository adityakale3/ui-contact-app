var text = encodeURIComponent('Housters To-Do Due: ' + self.task());
            var startDate = moment(self.dueDate()).format('YYYYMMDD');
            var endDate = moment(self.dueDate()).add('days', 1).format('YYYYMMDD');
            var details = encodeURIComponent(self.task());
            var location = encodeURIComponent(self.propertyName());
            var googleCalendarUrl = 'http://www.google.com/calendar/event?action=TEMPLATE&text=' + text + '&dates=' + startDate + '/' + endDate + '&details=' + details + '&location=' + location;